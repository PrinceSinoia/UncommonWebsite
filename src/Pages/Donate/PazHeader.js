import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
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
  font-size: 25px;
    font-weight: 800;
    line-height: 1.4;
    padding: 0 50px 0 50px;
}


.h1-second{
  font-size: 25px;
    font-weight: 800;
  position: relative;
  z-index: 1;
  /* &:before{
    z-index: 2;
    left: 130px;
    right: 0;
    width: 110px;
    height: 10%;
    position: absolute;
    content: "";
    top: 31px;
    background-color: #4A5AF8;
    } */
}
p{
  font-size: 20px;
    margin-top: 19px;
    padding: 0 9px;
    line-height: 40px;
    margin-bottom: 20px;


}
button{
width: 185px;
height: 50px;
border-radius: 5px;
border: none;
background-color: #4A5AF8;
font-size: 22px;
color:#F1F1FE;
font-weight: bold;
}
h3{
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  margin-top: 6%;
  padding: 0 40px;
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
    margin-left: 59px;
    margin-right: 24px;
    font-size: 16px;

}

h1 {
  font-size: 28px;
    font-weight: bolder;
    position: relative;
    line-height: 1.6;
    padding: 0 0px;
    text-align: left;
    margin-left: 59px;
    margin-right: 40px;
}

.h1-second{
margin-left: 59px;
    font-size: 28px;
    font-weight: bolder;
    text-align: left;
    /* padding-right: 155px; */
    position: relative;
    /* &:before {
      left: -7px;
    right: 0;
    width: 140px;
    height: 12%;
    position: absolute;
    content: "";
    top: 31px;
    background-color: #4A5AF8;
} */
}

button {
    width: 185px;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: #4A5AF8;
    font-size: 20px;
    color: #F1F1FE;
    font-weight: bold;
    margin-left: 59px;
}

h3 {
    font-size: 26px;
    font-weight: 600;
    line-height: 1.5;
    margin-top: 4%;
    padding: 0 0px;
    text-align: left;
    margin-left: 59px;
}
 
}




@media (min-width: 992px){
  position: relative;
    padding-bottom: 0%;
  h1 {
    font-size: 47px;
    font-weight: 800;
    position: relative;
    line-height: 1.4;
    padding: 0 px 0 0px;
    text-align: left;
    margin-left: 40px;
margin-right: 220px;
}
 h3 {
    font-size: 25px;
    font-weight: 600;
    line-height: 1.5;
    margin-top: 4%;
    padding: 0 0px;
    text-align: left;
    margin-left: 40px;
}

.h1-second{
  margin-left: 40px;
    font-size: 47px;
    font-weight: 800;
    text-align: left;
    /* padding-right: 155px; */
    position: relative;
    &:before {
      left: -2px;
    right: 0;
    width: 190px;
    height: 12%;
    position: absolute;
    content: "";
    top: 48px;
    background-color: #4A5AF8;
}
}

p {
  margin-top: 19px;
    padding: 0 0px;
    text-align: left;
    line-height: 46px;
    margin-bottom: 20px;
    margin-left: 40px;
    font-size: 25px;
    margin-right: 81px;
}
button {
    width: 185px;
    height: 53px;
    border-radius: 5px;
    border: none;
    background-color: #4A5AF8;
    font-size: 20px;
    color: #F1F1FE;
    font-weight: bold;
    margin-left: 40px;
}
}

@media (min-width:1200px){
  display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  .hero-text-div{
width: 50%;
  }
  padding-bottom: 0%;
  img{
    width: 100%;
    object-fit: cover;
  }
  .hero-text-div {
    width: 100%;
    text-align: center;
    padding-top: 7%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

}h1{
  font-weight: 800;
    font-size: 50px;
    line-height: 1.3;
    padding: 0 px 0px;
    margin-right: 30px;
    margin-left: 75px;

}
h3 {
    font-size: 23px;
    font-weight: 600;
    line-height: 1.5;
    margin-top: 5%;
    padding: 0 0px;
    text-align: left;
    margin-left: 75px;
}

.h1-second{
    padding: 0 0;
z-index: 0;
    font-size: 50px;
    font-weight: 800;
    position: relative;
    margin-right: 30px;
    margin-left: 75px;
    &:before {
      z-index: -1;
      left: -2px;
    right: 0;
    width: 189px;
    height: 17%;
    position: absolute;
    content: "";
    top: 45px;
    background-color: #4A5AF8;
}
}
p {
  word-spacing: 0px;
    margin-top: 10px;
    padding: 0px 0px;
    text-align: left;
    line-height: 44px;
    margin-bottom: 30px;
    margin-left: 75px;
    margin-right: 146px;
    font-size: 22px;
    font-weight: 300;
}
button {
    width: 170px;
    height: 45px;
    border-radius: 5px;
    border: 2px solid #4A5AF8;
    background-color: #4A5AF8;
    font-size: 20px;
    color: #F1F1FE;
    font-weight: bold;
    margin-left: 80px;
    &:hover{
      transition:  .2s all ease-in-out;
      background: transparent;
      color:#4A5AF8;
      
    } 
}

}
`

function PazHeader() {
  return (

    <Wrapper>
    <div class="hero">
    <img src="../uncommon images/img-pazhero.jpeg" alt="photo"/>
    <div class="hero-text-div">
        <h1>Uncommon stories  start with people </h1>
          <h1 className='h1-second'> like you.</h1>
          <h3>Join The Community Of Uncommon Donors.</h3>

        <p>We’re building a movement of people who believe that access to technology education & employment should be a basic human right.
            
            </p>
        <button>Donate Today</button>
    </div>
</div>
</Wrapper>


//     <Wrapper>
//     <div className="banner">
//       <div className="ii">
//       <img src="../uncommon images/img-pazhero.jpeg" alt=""/>
//       </div>
//       <div className="ban">
//           <h2>
//           Uncommon stories <br/>
//           start with people <br/>
//           like you. <hr/>
//           </h2>
//           <h5>Join The Community Of Uncommon Donors.</h5>
//           <p>
//           We’re building a movement of people who
//            believe that access to technology education &
//             employment should be a basic human right.

// <br/>
             
               
//           </p>
//           <button className="btn">
//               Donate Today
//           </button>
//       </div>
//       </div>  
//   </Wrapper>

  )
}

export default PazHeader
