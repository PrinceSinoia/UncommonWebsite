import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
display:flex;
flex-direction:column;
background: #F2F3FF;
padding-top: 15%;
padding-bottom: 15%;


img{

    width: 100%;
    height: 280px;
    object-fit: cover;
}

.first-p{
    margin-left: 18px;  
    font-size: 18px;
font-weight: 300;
margin-right: 50px;
line-height: 1.9;
margin-bottom: 7%;
}
.second-p{
    margin-left: 18px;  
    font-size: 18px;
font-weight: 300;
margin-right: 38px;
line-height: 1.9;
margin-bottom: 7%;
}
.third-p{
    margin-left: 18px;  
    font-size: 18px;
font-weight: 300;
margin-right: 38px;
line-height: 1.9;
margin-bottom: 7%;
}

h1{
    margin-top: 10%;
    font-size: 35px;
font-weight: 700;
line-height: 73.1px;
color: rgb(0, 0, 0);
margin-left: 18px;
}


@media (min-width: 768px) {
    flex-direction:row; 
    padding-top: 2%;
    padding-bottom: 3%;

    img{
        width: 393px;
    height: 306px;
    object-fit: cover;
    border-radius: 8px;
}
.right{
/* margin-left: 31px; */
width: 100%;
} 
.left{
display: flex;
align-items: center;
justify-content: center;
} 
 .first-p {
    margin-left: 31px;
    font-size: 20px;
    font-weight: 300;
    margin-right: 12px;
    line-height: 1.9;
    margin-bottom: 7%;
} .second-p {
    margin-left: 31px;
    font-size: 20px;
    font-weight: 300;
    margin-right: 38px;
    line-height: 1.9;
    margin-bottom: 7%;
}
 .third-p {
    margin-left: 31px;
    font-size: 20px;
    font-weight: 300;
    margin-right: 14px;
    line-height: 1.9;
    margin-bottom: 7%;
}
 h1 {
    margin-top: 10%;
    font-size: 35px;
    font-weight: 800;
    line-height: 73.1px;
    color: rgb(0, 0, 0);
    margin-left: 31px;
}
}


@media (min-width: 992px) {
    img {
    width: 515px;
    height: 478px;
    object-fit: cover;
    border-radius: 8px;
}  
 .first-p {
    margin-left: 69px;
    font-size: 22px;
    font-weight: 300;
    margin-right: 76px;
    line-height: 1.9;
    margin-bottom: 1%;
}
 h1 {
    margin-top: 2%;
    font-size: 35px;
    font-weight: 800;
    line-height: 73.1px;
    color: rgb(0, 0, 0);
    margin-left: 69px;
}
.second-p {
    margin-left: 69px;
    font-size: 22px;
    font-weight: 300;
    margin-right: 64px;
    line-height: 1.9;
    margin-bottom: 3%;
}
 .third-p {
    margin-left: 69px;
    font-size: 22px;
    font-weight: 300;
    margin-right: 59px;
    line-height: 1.9;
    margin-bottom: 0%;
}
}




@media (min-width: 1200px) {
    padding-top: 7%;
    padding-bottom: 7%;
    img {
        margin-top: 0%;
        width: 700px;
    height: 550px; 
} 
h1 {
    font-size: 60px;
    font-weight: 800;
    line-height: 73.1px;
    color: rgb(0, 0, 0);
    margin-left: 0px;
    margin-bottom: 4%;
    margin-right: 130px;
} 
.first-p {
    margin-left: 75px;
    font-size: 20px;
    font-weight: 300;
    margin-right: 140px;
    line-height: 1.9;
    margin-bottom: 3%;
}

.second-p {
    margin-left: 75px;
    font-size: 20px;
    font-weight: 300;
    margin-right: 64px;
    line-height: 1.9;
    margin-bottom: 3%;
}
 .third-p {
    margin-left: 75px;
    font-size: 20px;
    font-weight: 300;
    margin-right: 123px;
    line-height: 1.9;
    margin-bottom: 0%;
}
.right{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
}



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

const First = () => {
    return (
        <Wrapper>
            
            <div className = 'left'>
            <img className='se' src = 'https://uncommon.org/wp-content/uploads/2021/09/DZIKWA-CONTAINER-2020.png'/>
            </div>
            <div className = 'right'>
                <h1>Our First Hub. </h1>
                <p className = 'first-p'>As a grassroots organization, it has always been important for us to fully invest into the communities we serve.</p>
                <p className = ' second-p'>Now that we had our education model ready to go, we needed a home to make it official.</p>
                <p className = ' third-p'>We decided to use shipping containers and solar power to deal with a lot of the infrastructure challenges we had been facing. Our first Hub was built in 2019, and we’ve been off to the races ever since.</p>
            </div>
        </Wrapper>
        );
    };
    
    export default First;