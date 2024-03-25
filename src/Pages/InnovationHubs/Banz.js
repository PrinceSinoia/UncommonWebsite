import React from 'react';
import styled from 'styled-components';
const Wrapper  = styled.section`
display: flex;
flex-direction: column;
padding-bottom: 15%;
img{
  width: 100%;
  height: 450px;
  object-fit: cover;
}


h1{
  margin-top: 15%;
  text-align: center;
  font-size: 30px;
font-weight: 800;
}


p {
    text-align: center;
    padding: 0px 44px;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.9;
    margin-top: 8%;
}

button{
  display: none;
}


@media (min-width: 768px) {
  flex-direction: row;
  padding-bottom: 0%;

  .right{
width: 100%;
  }

  img{
    width: 400px;
    height: 535px;
    /* object-fit: cover; */
    border-radius: 5px;
}
 p {
  text-align: left;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.9;
    margin-top: 8%;
    margin-left: -21px;
    /* margin-right: -34px; */
    margin-top: 8%;
}
 h1 {
    margin-top: 46%;
    text-align: center;
    font-size: 30px;
    font-weight: 800;
    margin-right: 86px;
}
}


@media (min-width:992px) {
 img {
    width: 495px;
    height: 100vh;
    border-radius: 5px;
}
.right{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
 h1 {
    margin-top: 0%;
    text-align: center;
    font-size: 35px;
    font-weight: 800;
    margin-right: 139px;
}
 p {
    text-align: left;
    font-size: 22px;
    font-weight: 300;
    line-height: 1.9;
    margin-top: 8%;
    margin-left: 9px;
    margin-bottom: 8%;
    margin-right: 56px;
}

button {
  width: max-content;
  display: block;
    width: 255px;
    height: 49px;
    border-radius: 5px;
    margin-right: 162px;
    background: #4A5AF8;
    font-size: 18px;
    font-weight: 600;
    color:#ffff;
}
}


@media (min-width: 1200px){
  img{
    width: 185%;
    object-fit: cover;
  }
  h1 {
    margin-top: 0%;
    text-align: center;
    font-size: 60px;
    font-weight: 700;
    margin-right: 0px;
    margin-left: 229px;
}
p {
    text-align: left;
    font-size: 20px;
    font-weight: 300;
    line-height: 45px;
    margin-top: 2%;
      margin-left: 345px;
    margin-bottom: 2%;
    margin-right: 130px;
}
button {
  width: max-content;
  display: block;
    width: 280px;
    height: 49px;
    border-radius: 5px;
    margin-right: 2px;
    background: #4A5AF8;
    font-size: 18px;
    font-weight: 600;
    color:#ffff;
    margin-left: 75px;
    border: #4A5AF8 2px solid;
    &:hover{
      transition: all .2s ease-in-out;
      color: #4A5AF8 ;
      background:transparent
   
    }
}
.right{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
}








/* @media (min-width: 1024px) {
    flex-direction: row;
  }
.right{
    margin-top:180px;
    padding-left:80px;
    @media (max-width: 1028px) {
        margin-top:90px; 
        padding-left:40px 

    }
    h1{
        font-size: 54.64px;

font-weight: 700;

line-height: 92.888px;

color: rgb(0, 0, 0);
    }
    p{

font-size: 24px;

font-weight: 200;

line-height: 43.2px;

color: rgb(0, 0, 0);
    }
    .StyledButton {
        margin-top:50px;
    display: inline-block;
    padding: 13px 35px;
    background-color: blue;
    color: white;
    text-decoration: none;
    border: 2px solid transparent;
    transition: background-color 0.3s, border-color 0.3s, opacity 0.3s;
    border-radius:5px;
    &:hover {
      background-color: transparent;
      border-color: blue;
      color:blue;
      opacity: 0.7;
    }
  }
}
.left{
    img{
        width:647px;
        height: 100vh;
    min-height: auto;
    max-height: none;
    
    @media (max-width: 900px) {
        width:769px; 
    }
    @media (max-width: 1025px) {
       height: 48vh;   
    }
    @media (max-width:669px){
     height:90vh;
        width:667px;
    }
    @media (max-width: 400px) {
        width:376px;   
    }
    }
} */
`;

function Banz() {
    return (
  <Wrapper>
    <div className = 'left'>
        <img src ='https://uncommon.org/wp-content/uploads/2021/08/k-hands-on-computers@2x-1.png'/>
    </div>
    <div className = 'right'>
    
        <h1>Innovation Hubs</h1>
        
      {/* <p><span></span></p> */}
        <p>We transform recycled shipping containers into state of the art, solar powered workspaces to run our free technology Bootcamp locally.</p>
        <div className="ButtonWrapper">
     <button> Get In Touch To Learn More</button>
        </div>
    </div>
    </Wrapper>
  )
}

export default Banz