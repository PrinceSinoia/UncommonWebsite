import React from 'react'
import styled from 'styled-components'






const Wrapper= styled.section`
position: relative;
padding-bottom: 14%;




img{
  width: 100%;
    height: 69vh;
    object-fit: cover;
}
.hero-text-div{
  text-align: center;
  padding-top: 10%;
}
h1{
  font-size: 28px;
  font-weight: bolder;
  line-height: 1.6;
  padding: 0 50px 0 50px;
}


.h1-second{
  font-size: 28px;
  font-weight: bolder;
  position: relative;
  z-index: 1;
  &:before{
    z-index: 2;
    left: 63px;
    right: 0;
    width: 140px;
    height: 10%;
    position: absolute;
    content: "";
    top: 31px;
    background-color: #4A5AF8;
    }
}
p{
  font-size: 20px;
  margin-top:19px;
  padding: 0  9px;
  line-height: 40px;
  margin-bottom: 20px;


}
button{
width: 185px;
height: 50px;
border-radius: 5px;
border: #4A5AF8 2px solid ;
background-color: #4A5AF8;
font-size: 22px;
color:#F1F1FE;
font-weight: bold;

&:hover{
  background:transparent
}
}


@media (min-width: 768px) {
  position: relative;
    padding-bottom: 0%;
  .hero{
display: flex;
  }
  img{
    width: 50%;
    height: 100vh;
    object-fit: cover;
  }
.hero-text-div{
  text-align: center;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
p{
  margin-top: 19px;
     padding: 0 0px; 
    text-align: left;
    line-height: 36px;
    margin-bottom: 20px;
    margin-left: 22px;
    margin-right: 60px;
    font-size: 16px;

}

h1 {
    font-size: 28px;
    font-weight: bolder;
    position: relative;
    line-height: 1.6;
    padding: 0 0px ;
    text-align: left;
  margin-left: 27px;
}

.h1-second{
  right: 25px;
    font-size: 28px;
    font-weight: bolder;
    text-align: left;
    /* padding-right: 155px; */
    position: relative;
    &:before {
      left: -7px;
    right: 0;
    width: 140px;
    height: 12%;
    position: absolute;
    content: "";
    top: 31px;
    background-color: #4A5AF8;
}
}

button {
    width: 185px;
    height: 50px;
    border-radius: 5px;
 
    background-color: #4A5AF8;
    font-size: 20px;
    color: #F1F1FE;
    font-weight: bold;
    margin-left: 28px;
}
 
}

@media (min-width: 992px){
  position: relative;
    padding-bottom: 0%;
  h1 {
    font-size: 47px;
    font-weight: bolder;
    position: relative;
    line-height: 1.4;
    padding: 0 45px 0 33px;
    text-align: left;
    margin-left: -6px;

}


.h1-second{
    right: 28px;
    font-size: 47px;
    font-weight: bolder;
    text-align: left;
    /* padding-right: 155px; */
    position: relative;
    &:before {
      left: 34px;
    right: 0;
    width: 209px;
    height: 12%;
    position: absolute;
    content: "";
    top: 48px;
    background-color: #4A5AF8;
}
}

p {
    margin-top: 19px;
    padding: 0 7px;
    text-align: left;
    line-height: 36px;
    margin-bottom: 20px;
    margin-left: 24px;
    font-size: 20px;
}
button {
    width: 185px;
    height: 53px;
    border-radius: 5px;

    background-color: #4A5AF8;
    font-size: 20px;
    color: #F1F1FE;
    font-weight: bold;
    margin-left: 31px;
}
}

@media (min-width:1200px){

  .hero-text-div{
width: 50%;
  }
  padding-bottom: 0%;
  img{
    width: 110%;
    object-fit: cover;
  }
  .hero-text-div {
    text-align: center;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

}h1{
  font-weight: 700;
  font-size: 58px;
  line-height: 1.3;
  z-index: 0;
  padding: 0 50px 0 76px;
  margin-right:200px;

}


.h1-second{
  right: 66px;
    font-size: 58px;
    font-weight: 700;
    position: relative;
    &:before {
      z-index: -1;
      left: 76px;
    right: 0;
    width: 257px;
    height: 15%;
    position: absolute;
    content: "";
    top: 55px;
    background-color: #4A5AF8;
}
}
p {
  word-spacing: 0px;
    margin-top: 35px;
    padding: 0px 0px;
    text-align: left;
    line-height: 45px;
    margin-bottom: 30px;
    margin-left: 73px;
    margin-right: 50px;
    font-size: 25.5px;
    font-weight: 300;
}
button {
    width: 170px;
    height: 47px;
    border-radius: 5px;
 
    background-color: #4A5AF8;
    font-size: 20px;
    color: #F1F1FE;
    font-weight: bold;
    margin-left: 76px;
    &:hover{
      transition:  .2s all ease-in-out;
      color:#4A5AF8;
      
    }
}

}
`
function Hero() {
  return (
    <Wrapper>
        <div class="hero">
        <img src="../uncommon images/hero 2.png" alt="photo"/>
        <div class="hero-text-div">
            <h1>Tech education &
                employment, for
                <h1 className='h1-second'> everyone.</h1></h1>
            <p>We believe that everyone, everywhere should have access to life changing technology education and
                employment
                opportunities.
                
                </p>
            <button>Donate Today</button>
        </div>
    </div>
    </Wrapper>
  )
}

export default Hero
