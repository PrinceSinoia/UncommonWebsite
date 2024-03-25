import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
display:flex;
flex-direction:column-reverse;
background: #FFFF;
padding-top: 10%;
h1{
font-size: 35px;
font-weight: 700;
line-height: 73.1px;
color: rgb(0, 0, 0);
margin-left: 33px;
}

.first-p{
    font-size: 18px;
    margin-left: 33px;
    font-weight: 300;
    margin-right: 40px;
    line-height: 1.5;
}
 .second-p {
    font-size: 18px;
    margin-left: 33px;
    line-height: 1.7;
    font-weight: 300;
    padding: 24px 0;
    margin-right: 57px;
}
.third-p{
    font-size: 18px;
    margin-left: 33px;
    line-height: 1.5;
    font-weight: 300;
    margin-right: 55px;  
    margin-bottom: 20%;
}
img{
    width: 100%;
    height: 350px;
    object-fit: cover;
}

@media (min-width: 768px){
    padding-top: 0%;
    flex-direction:row;  
    img{
    width: 90%;
    height: 350px;
    object-fit: cover;
    border-radius: 5px;
}
.right{
    width: 50%;
}
 h1 {
    font-size: 35px;
    font-weight: 700;
    line-height: 73.1px;
    color: rgb(0, 0, 0);
    margin-left: -13px;
}
 .first-p {
    font-size: 20px;
    margin-left: -13px;
    font-weight: 300;
    margin-right: 40px;
    line-height: 1.5;
}
 .second-p {
    font-size: 20px;
    margin-left: -13px;
    line-height: 1.7;
    font-weight: 300;
    padding: 24px 0;
    margin-right: 33px;
}
.third-p {
    font-size: 20px;
    margin-left: -13px;
    line-height: 1.5;
    font-weight: 300;
    margin-right: 35px;
    margin-bottom: 0%;
}
}


@media (min-width: 992px){
    padding-top: 10%;
    img {
        margin-top: 13%;
    width: 90%;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
}
 .first-p {
    font-size: 22px;
    margin-left: 15px;
    font-weight: 300;
    margin-right: 87px;
    line-height: 1.5;
}

.second-p {
    font-size: 22px;
    margin-left: 15px;
    line-height: 1.7;
    font-weight: 300;
    padding: 24px 0;
    margin-right: 91px;
}
 h1 {
    font-size: 36px;
    font-weight: 800;
    line-height: 73.1px;
    color: rgb(0, 0, 0);
    margin-left: 15px;
}
 .third-p {
    font-size: 22px;
    margin-left: 15px;
    line-height: 1.5;
    font-weight: 300;
    margin-right: 105px;
    margin-bottom: 0%;
}
}
 

@media (min-width: 1200px){
    padding-top: 12%;
    padding-bottom: 5%;

    img {
        margin-top: 0%;
        width: 680px;
    height: 430px; 
} 
.right{
margin-left: 100px;
margin-top: 2.5%;
}

.first-p {
    font-size: 20px;
    margin-left: 15px;
    font-weight: 300;
    margin-right: 87px;
    line-height: 1.9;
}

.second-p {
    font-size: 20px;
    margin-left: 15px;
    line-height: 1.9;
    font-weight: 300;
    padding: 15px 0;
    margin-right: 120px;
}
 h1 {
    font-size: 60px;
    font-weight: 800;
    line-height: 73.1px;
    color: rgb(0, 0, 0);
    margin-left: 15px;
    margin-bottom: 5%;
}
 .third-p {
    font-size: 20px;
    margin-left: 15px;
    line-height: 1.9;
    font-weight: 300;
    margin-right: 105px;
    margin-bottom: 0%;
}
}








/* padding :80px; */
/* @media (max-width: 1030px) {
  flex-direction: column;
  padding:30px;}
  @media (min-width: 1130px) {
    padding-left:revert-layer;
    padding-top:175px;
padding-right:150px;
}
 
.right{
h1{
    font-size: 50px;

font-weight: 700;

line-height: 73.1px;

color: rgb(0, 0, 0);

}
p{
    font-size: 20px;

font-weight: 250;

line-height: 36px;
color: rgb(0, 0, 0) ;
}
}
.leen{margin-top:30px;
margin-bottom:30px;} 
.loo{
    margin-top:30px   
} 
.left{
    img{
        @media (min-width: 1100px) {
        width:600px;
        height:450px;
        border-radius:20px;
    padding-right:70px;}
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
            width:300px;
        height:200px; 
        }
    }
} */
`;

const Pivot = () => {
    return (
        <Wrapper>
            
            <div className = 'left'>
            <img className='se' src = 'https://uncommon.org/wp-content/uploads/2021/09/Tanya-writing-from-distance.png'/>
            </div>
            <div className = 'right'>
                <h1>Pivoting. </h1>
                <p className = 'first-p'>Before long, we realized a flaw in the model.</p>
                <p className = ' second-p'>While training unemployed young adults to become teachers was creating jobs, and kids were learning how to code, we didn’t feel we were making the type of impact we knew we could.</p>
                <p className='third-p'> So we decided to change our model, and to focus on training young adults for the tech workforce.</p>
            </div>
        </Wrapper>
        );
    };
    
    export default Pivot;