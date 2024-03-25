import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
display:flex;
flex-direction:column-reverse;
background: #F2F3FF;
padding-top: 8%;
padding-bottom: 15%;
img{
    width: 100%;
    height: 280px;
    object-fit: cover;
}

h1{
    margin-top: 10%;
    font-size: 35px;
font-weight: 700;
line-height: 73.1px;
color: rgb(0, 0, 0);
margin-left: 18px;
}
.prince{
    margin-left: 18px;  
    font-size: 16px;
font-weight: 300;
margin-right: 50px;
line-height: 1.9;
margin-bottom: 7%;
}
.prince-2{
    margin-left: 18px;  
    font-size: 16px;
font-weight: 300;
margin-right: 50px;
line-height: 1.9;
margin-bottom: 7%;
}
@media (min-width: 768px) {
    flex-direction:row; 
    padding-top: 5%;
    padding-bottom: 6%;

    img{
     width: 100%;
    height: unset;
    object-fit: unset;
  border-radius: 8px;
}

.right{
margin-left: 31px;
width: 50%;
}
 h1 {
    margin-top: 10%;
    font-size: 35px;
    font-weight: 700;
    color: rgb(0, 0, 0);
    margin-left: 18px;
    margin-right: 218px;
    line-height: 1.3;
}
 .prince {
    margin-left: 18px;
    font-size: 20px;
    font-weight: 300;
    margin-right: 86px;
    line-height: 1.9;
    margin-bottom: 3%;
}
 .prince-2 {
    margin-left: 18px;
    font-size: 20px;
    font-weight: 300;
    margin-right: 92px;
    line-height: 1.9;
}

.left{
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

}





@media (min-width: 992px) {
    padding-bottom: 4.5%;
   img {
    width: 170%;
    height: 350px;
    object-fit: unset;
    border-radius: 8px;
}  
 .prince {
    margin-left: 18px;
    font-size: 22px;
    font-weight: 300;
    margin-right: 121px;
    line-height: 1.9;
    margin-bottom: 3%;
}

.prince-2 {
    margin-left: 18px;
    font-size: 22px;
    font-weight: 300;
    margin-right: 92px;
    line-height: 1.9;
}
 h1 {
    
    margin-bottom: 3%;
}
}


@media (min-width: 1200px){
    padding-top: 6%;
    padding-bottom: 1%;
    h1 {
    margin-top: 0%;
    font-size: 60px;
    font-weight: 700;
    color: rgb(0, 0, 0);
    margin-left: 38px;
    margin-right: 218px;
    line-height: 1.3;
    margin-bottom: 3%;
} 
img {
    width: 580px;
    height: 430px;
    object-fit: unset;
    border-radius: 8px;
    margin-right: 10px;
} 
.left{
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.prince {
    margin-left: 40px;
    font-size: 22px;
    font-weight: 300;
    margin-right: 140px;
    line-height: 1.9;
    margin-bottom: 3%;
}

.prince-2 {
    margin-left: 40px;
    font-size: 20px;
    font-weight: 300;
    margin-right: 212px;
    line-height: 1.9;
}
}

/* @media (max-width: 1030px) {
  flex-direction: column;
  padding:30px;}
.right{
h1{
    @media (max-width: 400px) { font-size: 40px;}
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
.leen{margin-top:60px;
margin-bottom:30px;}  
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

const Donts = () => {
    return (
        <Wrapper>
        
             <div className = 'right'>
                <h1>Initial Concept. </h1>
                
                <p className = ' prince'>After successfully fundraising in the beginning of 2018, we created a business plan and put our ideas to the test.</p>
                <p className = ' prince-2'>The initial model was simple. Train unemployed young adults to be after school coding instructors.</p>
            </div>
            <div className = 'left'>
            <img className='se' src = 'https://uncommon.org/wp-content/uploads/2021/09/Screen-Shot-2021-02-10-at-3.21.38-PM.png'/>
            </div>
         
        </Wrapper>
        );
    };
    
    export default Donts;