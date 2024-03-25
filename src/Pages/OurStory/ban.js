import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`

background-color: rgb(74, 90, 249); 
width:100%;
    height:100vh;
    color:white;
    display: flex;
  justify-content: center;
  align-items:center;
  text-align:center;
  
    h1{
        font-size: 43px;
font-weight: 700;
line-height: 65px;
color: rgb(255, 255, 255);
margin-bottom: 4%;
    }
p{
        font-size: 24px;
        padding: 0 42px;
font-weight: 300;
line-height: 43px;
color: rgb(255, 255, 255);
    }



@media (min-width: 768px) {
  h1{
        font-size: 35px;
font-weight: 700;
line-height: 65px;
color: rgb(255, 255, 255);
margin-bottom: 4%;
    }
}


@media (min-width: 992px) {
  h1{
        font-size: 38px;
font-weight: 700;
line-height: 65px;
color: rgb(255, 255, 255);
margin-bottom: 4%;
    }
  p{
        font-size: 30px;
        padding: 0 0px;
font-weight: 300;
line-height: 43px;
color: rgb(255, 255, 255);
    } 
}



@media (min-width: 1200px) {
  h1{
        font-size: 60px;
font-weight: 700;
line-height: 65px;
color: rgb(255, 255, 255);
margin-bottom: 4%;
    }
  p{
        font-size: 30px;
        padding: 0 0px;
font-weight: 300;
line-height: 43px;
color: rgb(255, 255, 255);
    } 
}
`;
const OurStory = () => {
  return (
    <Wrapper>
        <div className = 'text'>
            <h1>Becoming Uncommon</h1> 
            <p>how we started, what we believe, and why</p>
        </div>
    
  </Wrapper>
  )
}
export default OurStory;