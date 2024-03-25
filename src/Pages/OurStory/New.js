import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
display:flex;
flex-direction:column;

padding-top: 1%;
padding-bottom: 3%;


.first-p{
    font-size: 18px;
    margin-left: 33px;
    line-height: 1.7;
    font-weight: 300;
    padding: 24px 0;
    margin-right: 74px;
}

.second-p {
    font-size: 18px;
    margin-left: 33px;
    line-height: 1.7;
    font-weight: 300;
    padding: 6px 0;
    margin-right: 57px;
}

h1{
    font-size: 35px;
    font-weight: 700;
    line-height: 73.1px;
    color: rgb(0, 0, 0);
    margin-left: 33px;
}

.third-p{
    font-size: 18px;
    margin-left: 33px;
    line-height: 1.7;
    font-weight: 300;
    padding: 24px 0;
    margin-right: 48px;
}

img{
    display: none;
}
span{
    font-weight: bold;
}


@media (min-width: 768px) {
    padding-top: 9%;
    flex-direction:row;
    img{
        display: block;
    width: 314px;
    height: 235px;
    object-fit: cover;
    border-radius: 5px;
    margin-right:30px;
}  
.right{
    width: 100%;
} 
.first-p {
    font-size: 20px;
    margin-left: 33px;
    line-height: 1.7;
    font-weight: 300;
    padding: 24px 0;
    margin-right: 81px;
}
 .second-p {
    font-size: 20px;
    margin-left: 33px;
    line-height: 1.7;
    font-weight: 300;
    padding: 4px 0;
    margin-right: 57px;
}
 .third-p {
    font-size: 20px;
    margin-left: 33px;
    line-height: 1.7;
    font-weight: 300;
    padding: 24px 0;
    margin-right: 49px;
}
.left{
    display: flex;
    align-items: center;
    justify-content: center;
}
}


@media (min-width: 992px) {
    img {
        margin-top: 13%;
    width: 450px;
    height: 330px;
    object-fit: cover;
    border-radius: 8px;
    margin-right:55px;
}  

.first-p {
    font-size: 22px;
    margin-left: 57px;
    line-height: 1.7;
    font-weight: 300;
    padding: 24px 0;
    margin-right: 81px;
}
.second-p {
    font-size: 22px;
    margin-left: 57px;
    line-height: 1.7;
    font-weight: 300;
    padding: 4px 0;
    margin-right: 57px;
}
 .third-p {
    font-size: 22px;
    margin-left: 57px;
    line-height: 1.7;
    font-weight: 300;
    padding: 24px 0;
    margin-right: 49px;
}
 h1 {
    font-size: 36px;
    font-weight: 800;
    line-height: 73.1px;
    color: rgb(0, 0, 0);
    margin-left: 57px;
}
}




@media (min-width: 1200px){
    padding-top: 2%;
    padding-bottom: 5%;
    img {
    width: 610px;
    height: 430px;
    object-fit: unset;
    border-radius: 8px;
    margin-right: 80px;
}  
.left{
    display: unset;
    align-items: unset;
    justify-content:unset;
}
.right{
 margin-top: 5%;
} 

.first-p {
    font-size: 20px;
    margin-left: 80px;
    line-height: 40px;
    font-weight: 300;
    padding: 24px 0;
    margin-right: 100px;
}
.second-p {
    font-size: 20px;
    margin-left: 80px;
    line-height: 40px;
    font-weight: 300;
    padding: 4px 0;
    margin-right: 100px;
}
 .third-p {
    font-size: 20px;
    margin-left: 80px;
    line-height: 40px;
    font-weight: 300;
    padding: 24px 0;
    margin-right: 160px;
}
 h1 {
    font-size: 60px;
    font-weight: 800;
    line-height: 73.1px;
    color: rgb(0, 0, 0);
    margin-left: 80px;
}
}
/* @media (max-width: 1030px) {
  flex-direction: column;
  padding:30px;}
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
    padding-left:120px;}
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

const New = () => {
    return (
        <Wrapper>
             <div className = 'right'>
                <h1>New Model. </h1>
                <p className = 'first-p'>Our new goal was to build a generation of purpose minded, tech savvy, entrepreneurial young adults.</p>
                <p className = ' second-p '>With this said, we knew we HAD to continue educating the youth.</p>
                <p className='third-p'>Today, when you join an Uncommon Bootcamp, not only are you training for the workforce, <span>you’re also volunteering teaching coding to kids in the community.</span></p>
            </div>
            <div className = 'left'>
            <img className='se' src ='https://uncommon.org/wp-content/uploads/2021/09/Tanya-writing-from-distance.png'/>
            </div>
           
        </Wrapper>
        );
    };
    
    export default New;