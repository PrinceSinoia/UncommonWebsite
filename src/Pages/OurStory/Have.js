import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
display:flex;
flex-direction:column;
padding-bottom: 15%;

.prince{
  padding: 20px 0;
  font-size: 16px;
font-weight: 300;
margin-left: 18px;
margin-right: 40px;
line-height: 1.8;
}
.p-text-combo{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
span{
    font-weight: 700;
}
img{
    width:100%;
    height: 500px;
    object-fit: cover;
}
h1{
    margin-top: 13%;
    font-size: 35px;
    font-weight: 800;
    line-height: 1.4;
    margin-left: 18px;
    margin-right: 30px;
    margin-bottom: 3%;
}
.first-p{
font-size: 16px;
font-weight: 300;
margin-left: 18px;
margin-right: 20px;
line-height: 1.8;
}

.last-p{
    font-size: 16px;
font-weight: 300;
margin-left: 18px;
margin-right: 20px;
line-height: 1.8;  
}


@media (min-width: 768px) {
    padding-top: 2%;
    padding-bottom: 1%;
    flex-direction:row;  

   h1 {
    margin-top: 0%;
}
  .first-p {
    font-size: 16px;
    font-weight: 300;
    margin-left: 18px;
    margin-right: 66px;
    line-height: 1.8;
}
 .prince {
    padding: 20px 0;
    font-size: 16px;
    font-weight: 300;
    margin-left: 18px;
    margin-right: 64px;
    line-height: 1.8;
}
 .last-p {
    font-size: 16px;
    font-weight: 300;
    margin-left: 18px;
    margin-right: 83px;
    line-height: 1.8;
}
        img{
            width: 96%;
    height: 537px;
        }
  
    .right{
        margin-left: 10px;
        width: 50%;
    }
}

@media (min-width: 992px) {
    padding-bottom: 0;
    padding-top: 0;
img {
    width: 102%;
    height: 572px;
}
.right {
    margin-left: 65px;
    width: 50%;
}
h1 {
    /* margin-top: 13%; */
    font-size: 40px;
    font-weight: 800;
    line-height: 1.7;
    margin-left: 18px;
    margin-right: 93px;
    margin-bottom: 3%;
}
 .prince {
    padding: 5px 0;
    font-size: 20px;
    font-weight: 300;
    margin-left: 18px;
    margin-right: 178px;
    line-height: 35px;
}
 .last-p {
    font-size: 20px;
    font-weight: 300;
    margin-left: 18px;
    margin-right: 71px;
    line-height: 35px;
    margin-top: 2%;
}
 .first-p {
    font-size: 20px;
    font-weight: 300;
    margin-left: 18px;
    margin-right: 66px;
    line-height: 1.8;
}
}

@media (min-width: 1200px) {
    padding-bottom: 0%;
    padding-top: 0;
    img {
    width: 110%;
    height: 695px;
} 
.right {
    margin-left: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    width: 50%;
}
h1 {
    /* margin-top: 13%; */
    font-size: 50px;
    font-weight: 800;
    line-height: 1.7;
    margin-left: 18px;
    margin-right: 93px;
    margin-bottom: 5%;
}
.prince {
    padding: 5px 0;
    font-size: 20px;
    font-weight: 300;
    margin-left: 18px;
    margin-right: 100px;
    line-height: 35px;
}
.last-p {
    font-size: 20px;
    font-weight: 300;
    margin-left: 18px;
    margin-right: 23px;
    line-height: 35px;
    margin-top: 4%;
}
}




/* @media (min-width: 1130px) {
    padding-left:2px;
    padding-top:revert-layer;
padding-right:150px; */
/* } */
/* @media (max-width: 1030px) {
  flex-direction: column;
  padding:30px;} */

  
/* .right{
    @media (min-width: 1130px) {
        padding-top:130px;
    } */
/* h1{
    @media (max-width: 400px) { font-size: 31px;}
    font-size: 50px;

font-weight: 700;

line-height: 73.1px;

color: rgb(0, 0, 0);

} */
/* p{
    font-size: 20px;

font-weight: 250;

line-height: 36px;
color: rgb(0, 0, 0) ;
} */
/* } */
/* .leen{margin-top:60px;
margin-bottom:30px;}   */
/* .left{
    img{
        @media (min-width: 1100px) {
        width:500px;
        height:750px;
    padding-right:60px;}
        @media (max-width: 1028px) {
        width:960px;
        height:800px;}
        
        @media (max-width: 900px) {
        width:700px;
        height:600px;}
        @media (max-width:669px){
            width:606px;
    height:573px;
        }
        @media (max-width: 400px) {
            width:100%;
    height: 500px;
    object-fit: cover;
        }
    }
} */


`;


const Donts = () => {
    return (
        <Wrapper>
            <div className = 'left'>
            <img className='se' src = 'https://uncommon.org/wp-content/uploads/2021/08/Two-kids-Focusing-Gillingham-1.png'/>
            </div>

            <div className = 'right'>
                <h1>We have always been  inspired by the youth.</h1>
<div className='p-text-combo'></div>
                <p  className = 'first-p'>When we launched our pilot in Zimbabwe at the end of 2017 our goal was singularly focused around<span>   teaching kids how to code.</span></p>

                <p className = 'prince'>We set out to test some initial theories and the results were clear.</p>

                <p className = 'last-p'>There was (and still is) an overwhelming thirst for technology education, and there was (and still is) a heartbreaking lack of opportunities for youths & young adults in our target communities.</p>
            </div>
        </Wrapper>
        );
};

export default Donts;
