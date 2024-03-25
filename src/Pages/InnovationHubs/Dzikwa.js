import React from 'react';
import styled from 'styled-components';
const Wrapper  = styled.section`
padding-top: 8%;
h1{
    position: relative;
    margin-top: 8%;
    font-size: 38px;
    font-weight: 700;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 35px;
    margin-right: 60px;
    margin-bottom: 10%;
    &:before{
        content: '';
        position: absolute;
        width:230px ;
        height:10px ;
        top: 48px;
        background: #4A5AF8;
    }

}
img{
    width: 80%;
    height: 300px;
    object-fit: cover;
    display: flex;
    margin: 0 auto;
}
p{
  margin-left: 35px;
    font-size: 22px;
    font-weight: 300;
    margin-right: 45px;
    line-height: 1.7;
    margin-bottom: 9%;
}
hr{
    border: none;
    width: 80%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    height: 2px;
    background: #E5E5E5;
}

a{
    h3{
        margin-top: 9%;
   font-size: 35px;
   font-weight: 300;
   line-height: 55px;
   color: rgb(0, 0, 0);
   margin-left: 35px;
   margin-right: 60px;
   margin-bottom: 5%;
}
}
h3 {
    font-size: 38px;
    font-weight: 700;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 35px;
    margin-right: 60px;
    margin-bottom: 5%;
}



@media (min-width:768px) {
    .section-combo{
        display: flex;
    flex-direction: row;
}

  .left{
    width: 100%;
    margin-left: 50px;
  } 
 img {
    width: 281px;
    height: 176px;
    object-fit: cover;
    display: flex;
    margin: 0 auto;
    margin-right: 84px;
    margin-top: 91%;
} 
 p {
    margin-left: 35px;
    font-size: 25px;
    font-weight: 300;
    margin-right: 65px;
    line-height: 1.7;
    margin-bottom: 9%;
}
 h3 {
    font-size: 38px;
    font-weight: 700;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 35px;
    margin-right: 27px;
    margin-bottom: 5%;
}
 h4 {
    margin-top: 0%;
    font-size: 38px;
    font-weight: 700;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 84px;
    margin-right: 60px;
    margin-bottom: -1%;
}
 a h3 {
    margin-top: 9%;
    font-size: 33px;
    font-weight: 300;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 35px;
    margin-right: 60px;
    margin-bottom: 5%;
}
}



@media (min-width: 992px) {
   img {
    width: 340px;
    height: 464px;
    object-fit: cover;
    display: flex;
    margin: 0 auto;
    margin-right: 104px;
    margin-top: 74px;
} 
 p {
    margin-left: 60px;
    font-size: 25px;
    font-weight: 300;
    margin-right: 132px;
    line-height: 1.7;
    margin-bottom: 9%;
}
h3 {
    font-size: 38px;
    font-weight: 700;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 60px;
    margin-right: 27px;
    margin-bottom: 5%;
}
 h1 {
    position: relative;
    margin-top: 8%;
    font-size: 38px;
    font-weight: 700;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 10%;
}
 h4 {
    margin-top: 0%;
    font-size: 38px;
    font-weight: 700;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 108px;
    margin-right: 60px;
    margin-bottom: -1%;
}
 a h3 {
    margin-top: 7%;
    font-size: 33px;
    font-weight: 300;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 5%;
}
}



@media (min-width: 1200px) {
    padding-top: 9%; 
    h1 {
    position: relative;
    margin-top: 8%;
    font-size: 70px;
    font-weight: 700;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 10%;
    &:before{
        content: '';
        position: absolute;
        width:410px ;
        height:10px ;
        top: 62px;
        background: #4A5AF8;
    }
}
h4 {
    margin-top: 0%;
    font-size: 50px;
    font-weight: 800;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 140px;
    margin-right: 60px;
    margin-bottom: 3%;
}
h3 {
    font-size: 38px;
    font-weight: 300;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 60px;
    margin-right: 27px;
    margin-bottom: 4%;
}
p {
    margin-left: 60px;
    font-size: 23px;
    font-weight: 300;
    margin-right: 122px;
    line-height: 1.9;
    margin-bottom: 6%;
}
img {
    width: 520px;
    height: 464px;
    object-fit: cover;
    display: flex;
    margin: 0 auto;
    margin-right: 140px;
    margin-top: 74px;
} 
.left{
    width: 100%;
    margin-left: 80px;
  } 
  a h3 {
    margin-top: 5.5%;
    font-size: 30px;
    font-weight: 300;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 5%;
}
}
`;

function Recent() {
    return (
  <Wrapper>

    <div className='section-combo'>
    <div className = ' left'>

<h1>Dzikwa Trust</h1>
<h3>Innovation Hub</h3>
<p>The Dzivarasekwa space was the first Hub we ever built. We didn’t realize how fast we’d be growing but it’s been nonstop ever since! </p>
<hr/>
<a><h3>Read More</h3></a>
    </div>

    <div className = 'right'>
    <img  className = 'gray'src = 'https://uncommon.org/wp-content/uploads/2021/09/Nedbank-Hub-1.jpg'/>
    </div>
    </div>
    </Wrapper>
  )
}

export default Recent