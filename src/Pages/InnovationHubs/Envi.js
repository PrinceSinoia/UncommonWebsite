import React from 'react';
import styled from 'styled-components';
const Wrapper  = styled.section`
padding-top: 15%;
padding-bottom: 8%;

.below{
  display: flex;
  gap: 5px;
}
.img-1{
width: 50%;
height: 150px;
object-fit: cover;
}
h1{
    margin-top: 0%;
    font-size: 35px;
font-weight: 800;
line-height: 55px;
color: rgb(0, 0, 0);
margin-left: 35px;
margin-right: 60px;
margin-bottom: 5%;
}

p{
  margin-left: 35px;
    font-size: 20px;
    font-weight: 300;
    margin-right: 45px;
    line-height: 1.7;
    margin-bottom: 9%;
}


@media (min-width: 768px) {
  padding-top: 11%;
padding-bottom: 5%;


h1 {
  margin-top: 0%;
    font-size: 40px;
    font-weight: 800;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 80px;
    margin-right: 60px;
    margin-bottom: 7%;
}
 p {
  margin-left: 80px;
    font-size: 25px;
    font-weight: 300;
    margin-right: 104px;
    line-height: 1.7;
    margin-bottom: 7%;
}
.below{
  margin: 0 90px;
  display: flex;
  justify-content: center;
}
.img-1 {
    width: 50%;
    height: 239px;
    object-fit: cover;
}
}



@media (min-width: 992px) {
  padding-top: 15%;
padding-bottom: 8%;

 h1 {
    margin-top: 0%;
    font-size: 40px;
    font-weight: 800;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 80px;
    margin-right: 60px;
    margin-bottom: 4%;
}
 p {
    margin-left: 80px;
    font-size: 25px;
    font-weight: 300;
    margin-right: 81px;
    line-height: 1.7;
    margin-bottom: 4%;
}
.below{
  margin: 0px;
  display: flex;
  justify-content: center;
}
 .img-1 {
    width: 50%;
    height: 382px;
    object-fit: cover;
}
}



@media (min-width: 1200px) {
  padding-top: 13%;
  h1 {
    margin-top: 0%;
    font-size: 50px;
    font-weight: 800;
    line-height: 55px;
    color: rgb(0, 0, 0);
    margin-left: 80px;
    margin-right: 60px;
    margin-bottom: 5%;
}
p {
    margin-left: 80px;
    font-size: 25px;
    font-weight: 300;
    margin-right: 221px;
    line-height: 1.5;
    margin-bottom: 4%;
}
.img-1 {
    width: 50%;
    height: 530px;
    object-fit: cover;
}
}
`;

function Envi() {
    return (
  <Wrapper>
    <h1>Environment Matters</h1>
    <p>Our goal is to create awe-inspiring learning environments where our students and young adults are encouraged to wonder, create & thrive.</p>
    <div className = 'below'>
        <img className='img-1' src = 'https://uncommon.org/wp-content/uploads/2021/08/KW-Container-for-Uncommon-site@2x.png' alt =''/>
       
        <img  className='img-1'src = 'https://uncommon.org/wp-content/uploads/2021/08/KW-Container-for-Uncommon-site@2x.png' alt =''/>

    </div>
    </Wrapper>
  )
}

export default Envi